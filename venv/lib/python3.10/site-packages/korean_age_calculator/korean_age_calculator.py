"""korean_age_calculator 모듈.

Please put in a description of the module.

Example:
    ``korean_age_calculator`` 사용법은 아래와 같습니다.

        $ pip install ./
        $ korean_age_calculator-ping

추가적인 설명은 여기에!

Attributes:
    nnn (int): ``사용되지 않는`` 시범용 변수

Todo:
    * 무한한 모듈의 발전 ``꿈``꾸며!
    * ``Dreaming`` of infinite module development!

"""
import sys
import datetime


def how_korean_age(year_of_birth: int, current_year=datetime.datetime.now().year) -> int:
    """한국 나이 계산

    Args:
        year_of_birth: 태어난 해
        current_year: 기준년도(옵션)

    Returns:
        한국식 나이를 알려드립니다.
    """
    korean_age = current_year - year_of_birth + 1
    return korean_age


def main():
    try:
        year_of_birth = int(sys.argv[1])
        korean_age = how_korean_age(year_of_birth)
        print(f'Born in {year_of_birth}, you are {korean_age} 살(years old) in Korean style.')
    except (ValueError, IndexError) as e:
        print("please enter your year of birth:", e)


if __name__ == "__main__":
    main()
