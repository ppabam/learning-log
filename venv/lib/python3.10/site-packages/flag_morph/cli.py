import fire
from flag_morph.extract import extract_nouns

def entry_point():
    fire.Fire(extract_nouns)
