from fastapi import FastAPI
from datetime import datetime, date
from typing import Dict
import random
from flag_morph.extract import extract_nouns

### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

@app.get("/api/py/helloFastApi")
def hello_fast_api():
    return {"message": "Hello from FastAPI"}

@app.get("/api/py/ageCalculator/{birthday}")
def age_calculator(birthday: str) -> Dict[str, str]:
    """
    생년월일을 입력받아 만나이를 계산하는 API

    :param birthday: 생년월일 (형식: YYYY-MM-DD)
    :return: 생년월일 및 만나이를 포함한 JSON 응답
    """
    today = date.today()
    birth_date = datetime.strptime(birthday, "%Y-%m-%d").date()

    # 만나이계산
    age = today.year - birth_date.year
    is_pre_birthday = today < birth_date.replace(year=today.year)
    if is_pre_birthday:
        age = age - 1

    # 띠
    zodiac_animals = [
    "🐀 Rat",      # 자 - 쥐
    "🐂 Ox",       # 축 - 소
    "🐅 Tiger",    # 인 - 호랑이
    "🐇 Rabbit",   # 묘 - 토끼
    "🐉 Dragon",   # 진 - 용
    "🐍 Snake",    # 사 - 뱀
    "🐎 Horse",    # 오 - 말
    "🐐 Goat",     # 미 - 양
    "🐒 Monkey",   # 신 - 원숭이
    "🐓 Rooster",  # 유 - 닭
    "🐕 Dog",      # 술 - 개
    "🐖 Pig"       # 해 - 돼지
    ]
    zodiac = zodiac_animals[birth_date.year % 12 - 4]
    os_name = get_os_pretty_name()
    return {
            "birthday": birthday,
            "age": str(age),
            "basedate": str(today),
            "zodiac": zodiac,
            "os-name": os_name,
            "message": "Age calculated successfully!",
            }

def get_os_pretty_name() -> str:
    with open('/etc/os-release', 'r') as file:
        for line in file:
            if line.startswith('PRETTY_NAME'):
                # PRETTY_NAME=\"Ubuntu 24.04.1 LTS\"\n
                # \"Ubuntu 24.04.1 LTS\"\n
                # \"Ubuntu 24.04.1 LTS\"
                # Ubuntu 24.04.1 LTS
                return line.split('=')[1].replace('\n','').strip("\"")
    return None

@app.get("/api/py/getNouns/{sentence}")
def get_nouns(sentence: str) -> Dict[str, list[str]]:
    r = extract_nouns(sentence)
    return {"nouns": r}