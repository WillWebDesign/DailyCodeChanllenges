import os
from datetime import datetime

BASE_PATH = os.getcwd()


def next_day_folder():
    existing = [
        d for d in os.listdir(BASE_PATH) if d.startswith("day-") and d[4:].isdigit()
    ]
    if not existing:
        return "day-001"

    max_day = max(int(d[4:]) for d in existing)
    return f"day-{str(max_day + 1).zfill(3)}"


def create_structure():
    day_folder = next_day_folder()
    day_path = os.path.join(BASE_PATH, day_folder)

    os.makedirs(day_path)
    os.makedirs(f"{day_path}/python")
    os.makedirs(f"{day_path}/js")

    # README principal
    with open(f"{day_path}/README.md", "w") as f:
        f.write(f"# Reto {day_folder}\n\nDescripción del reto.\n")

    # Python
    with open(f"{day_path}/python/main.py", "w") as f:
        f.write("# Solución en Python\n")

    with open(f"{day_path}/python/requirements.txt", "w") as f:
        f.write("# Dependencias del día\n")

    # JavaScript
    with open(f"{day_path}/js/index.js", "w") as f:
        f.write("// Solución en JavaScript\n")

    with open(f"{day_path}/js/package.json", "w") as f:
        f.write(
            """{
  "name": "daily-challenge",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}
"""
        )

    print(f"✅ {day_folder} creado correctamente")


if __name__ == "__main__":
    create_structure()
