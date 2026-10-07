"""Extract supplied reference assets without changing their visible pixels.

The originals remain in references/. The official transparent portrait is copied
without any pixel changes.
"""
from pathlib import Path
from PIL import Image
import shutil

root = Path(__file__).resolve().parents[1]
out = root / 'public/assets/dr-juvenilson'
refs = root / 'references'
out.mkdir(parents=True, exist_ok=True)
refs.mkdir(exist_ok=True)
names = {
    'hero': '1dc85f52-ce1b-4d30-83e7-ea52e4af963e',
    'logo': '59f1dd6e-ed71-4535-b9d1-8cce61d6fe1e',
    'background': 'db0616a4-511e-45bb-a56d-674c19f4f404',
    'treatments': 'a73c19a4-0dce-49d6-9fbb-db0afa617a63',
    'clinic': '093659ee-71e6-44eb-9272-9e5cf166a76a',
    'results': 'f12ce78f-8416-4a16-97b2-1067191ca88a',
    'location': '6c3815c6-6769-457a-912d-fb7a0759a7fd',
}
images = {}
for name, suffix in names.items():
    source = Path('C:/Users/User/AppData/Local/Temp') / f'codex-clipboard-{suffix}.png'
    if source.exists():
        shutil.copy2(source, refs / f'{name}.png')
    images[name] = Image.open(refs / f'{name}.png')

logo = images['logo']
bbox = logo.getchannel('A').getbbox()
logo.crop(bbox).save(out / 'logo-juvenilson.png')
logo.crop((bbox[0], bbox[1], 505, bbox[3])).save(out / 'monogram.png')
images['background'].save(out / 'hero-background.png')

# Preserve the client-provided transparent portrait exactly.
shutil.copy2(refs / 'dr-juvenilson-oficial.png', out / 'dr-juvenilson-oficial.png')

for name, x0, x1 in [
    ('implantodontia', 110, 300), ('periodontia', 389, 641),
    ('protese', 721, 946), ('facetas', 1050, 1240), ('invisalign', 1353, 1602),
]:
    images['treatments'].crop((x0, 382, x1, 563)).save(out / f'{name}.png')

images['clinic'].crop((845, 148, 1609, 865)).save(out / 'clinic.png')
for i, (left, middle, right) in enumerate([(62, 302, 542), (599, 837, 1075), (1133, 1371, 1611)], 1):
    images['results'].crop((left, 456, middle, 704)).save(out / f'resultado-0{i}-antes.png')
    images['results'].crop((middle, 456, right, 704)).save(out / f'resultado-0{i}-depois.png')

print('Prepared provided logo, original background, portrait, clinic, five treatments and six result images.')

