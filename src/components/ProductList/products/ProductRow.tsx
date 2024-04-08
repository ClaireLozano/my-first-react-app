export function ProductRow({
  product,
}: {
  product: { name: string; price: string; stocked: true };
}): JSX.Element {
  const style = product.stocked ? undefined : { color: 'red' };

  return (
    <>
      <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  );
}
