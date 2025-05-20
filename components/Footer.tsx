export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-10 pl-20 bg-white rounded py-20">
      <div className="flex w-full justify-between border-b-1 border-[#13131329] pb-10 pr-20">
        <div>
          <div className="flex flex-col gap-y-5 w-[300px] ">
            <h2 className="text-primary text-4xl">LOGO</h2>
            <p>
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="space-y-5 ">
            <h3 className="text-xl text-secondary font-bold">About</h3>
            <div className="text-[#131313] flex flex-col gap-y-4">
              <h6>How it works</h6>
              <h6>Featured</h6>
              <h6>Partnership</h6>
              <h6>Business Relation</h6>
            </div>
          </div>
          <div className="space-y-5 ">
            <h3 className="text-xl text-secondary font-bold">Community</h3>
            <div className="text-[#131313] flex flex-col gap-y-4">
              <h6>Events</h6>
              <h6>Blog</h6>
              <h6>Podcast</h6>
              <h6>Invite a friend</h6>
            </div>
          </div>
          <div className="space-y-5 ">
            <h3 className="text-xl text-secondary font-bold">Socials</h3>
            <div className="text-[#131313] flex flex-col gap-y-4">
              <h3>Discord</h3>
              <h3>Instagram</h3>
              <h3>Twitter</h3>
              <h3>Facebook</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span>&copy;{new Date().getFullYear()}. All rights reserved</span>
        <div className="flex gap-4">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
