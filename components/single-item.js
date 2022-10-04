const SingleItem = (props) => {
  const handleDelete = async () => {
    const repsonse = await fetch(`/api/items/${props.index}`, {
      method: "DELETE",
    });

    // const data = await repsonse.data();

    // return data;
  };

  return (
    <>
     
    </>
  );
};

export default SingleItem;
