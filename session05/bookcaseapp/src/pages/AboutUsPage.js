import "../pages/About.css";

const AboutUsPage = (props) => {
    return(
        <>
      <div className="page">
        <h2 className= "intro">Welcome to the Bookcase Application</h2>
        <p className= "sub">
          This Bookcase application allows a user to add a set of books to a
          collection of books. It connects to the Google Books API, use the search bar to find the latest books by name, author or description
        </p>
      </div>
    </>
    );
}
export default AboutUsPage;