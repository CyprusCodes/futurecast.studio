export function easeOutBack(
  elapsed,
  initialValue,
  amountOfChange,
  duration,
  s
) {
  if (!s) {
    s = 1.70158;
  }
  return (
    amountOfChange *
      ((elapsed = elapsed / duration - 1) * elapsed * ((s + 1) * elapsed + s) +
        1) +
    initialValue
  );
}
