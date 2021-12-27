function Contact() {
  return (
<div class="contact-container">
  <h1>Contact Me</h1>
  <form target="_blank" action="https://formsubmit.co/nguyenmingoc18@gmail.com" method="POST">
    <div class="form-group">
      <div class="form-row">
        <div class="col">
          <input type="text" name="name" class="form-control" placeholder="Full Name" required />
        </div>
        <div class="col">
          <input type="email" name="email" class="form-control" placeholder="Email Address" required />
        </div>
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
    </div>
    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit</button>
  </form>
</div>
  );
}

export default Contact;
