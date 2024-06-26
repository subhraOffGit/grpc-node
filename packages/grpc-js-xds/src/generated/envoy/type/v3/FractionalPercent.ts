// Original file: deps/envoy-api/envoy/type/v3/percent.proto


// Original file: deps/envoy-api/envoy/type/v3/percent.proto

/**
 * Fraction percentages support several fixed denominator values.
 */
export const _envoy_type_v3_FractionalPercent_DenominatorType = {
  /**
   * 100.
   * 
   * **Example**: 1/100 = 1%.
   */
  HUNDRED: 'HUNDRED',
  /**
   * 10,000.
   * 
   * **Example**: 1/10000 = 0.01%.
   */
  TEN_THOUSAND: 'TEN_THOUSAND',
  /**
   * 1,000,000.
   * 
   * **Example**: 1/1000000 = 0.0001%.
   */
  MILLION: 'MILLION',
} as const;

/**
 * Fraction percentages support several fixed denominator values.
 */
export type _envoy_type_v3_FractionalPercent_DenominatorType =
  /**
   * 100.
   * 
   * **Example**: 1/100 = 1%.
   */
  | 'HUNDRED'
  | 0
  /**
   * 10,000.
   * 
   * **Example**: 1/10000 = 0.01%.
   */
  | 'TEN_THOUSAND'
  | 1
  /**
   * 1,000,000.
   * 
   * **Example**: 1/1000000 = 0.0001%.
   */
  | 'MILLION'
  | 2

/**
 * Fraction percentages support several fixed denominator values.
 */
export type _envoy_type_v3_FractionalPercent_DenominatorType__Output = typeof _envoy_type_v3_FractionalPercent_DenominatorType[keyof typeof _envoy_type_v3_FractionalPercent_DenominatorType]

/**
 * A fractional percentage is used in cases in which for performance reasons performing floating
 * point to integer conversions during randomness calculations is undesirable. The message includes
 * both a numerator and denominator that together determine the final fractional value.
 * 
 * * **Example**: 1/100 = 1%.
 * * **Example**: 3/10000 = 0.03%.
 */
export interface FractionalPercent {
  /**
   * Specifies the numerator. Defaults to 0.
   */
  'numerator'?: (number);
  /**
   * Specifies the denominator. If the denominator specified is less than the numerator, the final
   * fractional percentage is capped at 1 (100%).
   */
  'denominator'?: (_envoy_type_v3_FractionalPercent_DenominatorType);
}

/**
 * A fractional percentage is used in cases in which for performance reasons performing floating
 * point to integer conversions during randomness calculations is undesirable. The message includes
 * both a numerator and denominator that together determine the final fractional value.
 * 
 * * **Example**: 1/100 = 1%.
 * * **Example**: 3/10000 = 0.03%.
 */
export interface FractionalPercent__Output {
  /**
   * Specifies the numerator. Defaults to 0.
   */
  'numerator': (number);
  /**
   * Specifies the denominator. If the denominator specified is less than the numerator, the final
   * fractional percentage is capped at 1 (100%).
   */
  'denominator': (_envoy_type_v3_FractionalPercent_DenominatorType__Output);
}
