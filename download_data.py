import requests
import json

def download_data(url, file_name):
    """
    Download a file from a url and save it to a file.
    """
    r = requests.get(url)
    data = r.json()
    with open(file_name, 'w') as f:
        json.dump(data, f)


movieIDs = [338953, 453395, 526896, 626735, 675353, 752623, 818397]

for movieID in movieIDs:
    url_movie_detail = 'https://api.themoviedb.org/3/movie/{}?api_key=fa6d4e8708a0ef994887f86f263d7950'.format(movieID)
    url_videos = 'https://api.themoviedb.org/3/movie/{}/videos?api_key=fa6d4e8708a0ef994887f86f263d7950'.format(movieID)
    url_watch_provider = 'https://api.themoviedb.org/3/movie/{}/watch/providers?api_key=fa6d4e8708a0ef994887f86f263d7950'.format(movieID)
    download_data(url_movie_detail, "movieDetail_" + str(movieID) + ".json")
    download_data(url_videos, "movieVideos_" + str(movieID) + ".json")
    download_data(url_watch_provider, "movieWatchProviders_" + str(movieID) + ".json")
