const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="job-location">Job location</label>
        <select name="job-location" id="job-location">
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="IN">India</option>
          <option value="AU">Austrialia</option>
        </select>
      </div>
      <div>
        <label htmlFor="terms">
          <input type="checkbox" name="terms" id="terms" /> I agree to the terms
          and conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Application;