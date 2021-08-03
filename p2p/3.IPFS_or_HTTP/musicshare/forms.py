from musicshare.models import Song

from django.forms import ModelForm


class SongUploadForm(ModelForm):
    class Meta:
        model = Song
        fields = ['title', 'by', 'category', 'file']
