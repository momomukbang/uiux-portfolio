import requests
import os

def download_image(url, filename):
    response = requests.get(url)
    if response.status_code == 200:
        with open(filename, 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {filename}")
    else:
        print(f"Failed to download {filename}")

# Create images directory if it doesn't exist
os.makedirs("images", exist_ok=True)

# Dictionary of placeholder images from placeholder.com
images = {
    "ai-portrait.png": "https://via.placeholder.com/500x600/f4f4f4/333333?text=AI+Portrait",
    "carnex-dealership.png": "https://via.placeholder.com/800x500/f4f4f4/333333?text=Carnex+Dealership",
    "cooperators-flow.png": "https://via.placeholder.com/800x500/f4f4f4/333333?text=Cooperators+Flow",
    "cooperators-improvements.png": "https://via.placeholder.com/800x500/f4f4f4/333333?text=Cooperators+Improvements",
    "cooperators-mockup.png": "https://via.placeholder.com/800x500/f4f4f4/333333?text=Cooperators+Mockup",
    "cooperators-process.png": "https://via.placeholder.com/800x500/f4f4f4/333333?text=Cooperators+Process",
    "dford-navigation.png": "https://via.placeholder.com/800x500/f4f4f4/333333?text=Digital+Ford+Navigation",
    "meta-experiment.png": "https://via.placeholder.com/800x500/f4f4f4/333333?text=Meta+Experiment",
    "td-student-hub.png": "https://via.placeholder.com/800x500/f4f4f4/333333?text=TD+Student+Hub",
    "vosyn-thumbnail.png": "https://via.placeholder.com/800x500/f4f4f4/333333?text=Vosyn+Voice+AI"
}

for filename, url in images.items():
    filepath = os.path.join("images", filename)
    download_image(url, filepath)
