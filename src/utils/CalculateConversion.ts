export default function calculateConversion(
  initialValue: string,
  conversionCoinValue: string
) {
  const floatResult = Number(initialValue) * Number(conversionCoinValue);

  const polishedResult = floatResult.toFixed(2);

  return polishedResult;
}
