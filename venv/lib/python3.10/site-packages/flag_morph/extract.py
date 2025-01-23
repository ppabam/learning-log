from kiwipiepy import Kiwi
import fire

def extract_nouns(sentence: str, is_print: bool = False) -> list:
    """
    주어진 문장에서 NNG(일반 명사), NNP(고유 명사), NP(대명사)만 추출하여 리스트로 반환합니다.

    :param sentence: 분석할 문장 (str)
    :param is_print: 추출된 명사를 출력할지 여부 (bool)

    :return: 특정 품사의 단어 목록 (list)
    """
    kiwi = Kiwi()
    result = kiwi.analyze(sentence)
    # 첫 번째 결과에서 단어와 품사 정보를 가져옴
    tokens = result[0][0]

    # print(tokens)

    # NNG, NNP, NNB, NP 품사만 필터링
    # https://github.com/bab2min/kiwipiepy?tab=readme-ov-file#%ED%92%88%EC%82%AC-%ED%83%9C%EA%B7%B8
    target_pos = {"NNG", # 일반 명사
                  "NNP", # 고유 명사
                  "NP"   # 대명사
                  }
    extracted = [word for word, pos, _, _ in tokens if pos in target_pos]
    print(f"Extracted nouns: {extracted}") if is_print else None
    return extracted
