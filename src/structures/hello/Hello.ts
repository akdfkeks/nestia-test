export interface IHelloDto {
  /**
   * Email 형식의 문자열
   * @format email
   */
  email: string;

  /**
   * 임의의 문자열 (8~ 30자)
   * @minLength 8
   * @maxLength 30
   */
  password: string;

  /**
   * 성별을 나타내는 속성 (optional)
   * T: 남자
   * F: 여자
   */
  gender?: boolean;
}
