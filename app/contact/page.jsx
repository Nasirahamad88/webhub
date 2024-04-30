import React from "react";

const Contact = () => {
  return (
    <div className="text-center">
      <section className="w-full  py-20 dark:bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-[570px] text-center">
            <h1 className="mb-6 text-4xl font-bold text-primary">Contact Us</h1>
            <h2 className="mb-8 text-[32px] font-bold uppercase text-dark dark:text-white">
              GET IN TOUCH WITH US
            </h2>
            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
              Ready to take your WebDev agency experience to the next level?
              We're here to help! Whether you have questions about our services,
              want to discuss a potential collaboration, or just want to say
              hello, we'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center mb-8">
                <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Icon path */}
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Dhaka, Dhanmondi, BD
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Icon path */}
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    (+880) 1759277464
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Icon path */}
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Nasirahamad017@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-8">
                <div className="mr-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/5 text-primary">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Icon path */}
                  </svg>
                </div>
                <div>
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/company/98778963/admin/feed/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-body-color dark:text-dark-6 hover:text-primary dark:hover:text-primary"
                  >
                    Visit our LinkedIn page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
