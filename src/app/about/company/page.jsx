const company = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-4">Company</h1>
      <div
        className="hero w-full"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-max mt-4">
            <h1 className="mb-5 text-5xl font-bold">Big Company</h1>
            <p className="mb-5 text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              dolore, illo quasi aliquid officia dignissimos ab nulla vero,
              distinctio adipisci optio hic! Placeat doloribus, reprehenderit
              natus unde, tempore, sed corporis quasi veniam nulla eaque
              perferendis! Hic ducimus eos corporis neque perspiciatis eius
              doloribus esse laboriosam et vitae dignissimos dolorum vel
              exercitationem nihil ratione cumque in, sunt atque inventore
              temporibus nostrum? Delectus deleniti, id, odio quos sed ex
              consequatur vitae deserunt quasi rerum quo nisi fuga laborum
              accusamus nostrum porro possimus repellat nam eaque quisquam.
              Excepturi explicabo impedit cum laudantium natus doloremque, fugit
              neque laboriosam porro labore? Eos accusamus tempore commodi?
            </p>
            <button className="btn btn-accent font-black">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default company;
