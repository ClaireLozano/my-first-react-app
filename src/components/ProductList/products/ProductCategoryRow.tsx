export function ProductCategoryRow({ name }: { name: string }): JSX.Element {
  return (
    <>
      <tr>
        <td>
          <strong>{name}</strong>
        </td>
      </tr>
    </>
  );
}
