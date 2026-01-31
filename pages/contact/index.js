import Layouts from '@/components/Layouts';
import { motion } from 'framer-motion';
import { Contacts } from '@/data/Contacts';
import { useEffect, useState } from 'react';
import { ContentAnimation, FadeAnimation } from '@/components/Animations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
    const form = document.forms['contact-form'];

    const submitForm = (e) => {
      e.preventDefault();
      setIsLoading(true);
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => {
          form.reset();
          setOpenModal(true);
          setMessageAlert(true);
        })
        .catch(() => {
          setOpenModal(true);
          setMessageAlert(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    form.addEventListener('submit', submitForm);
    return () => form.removeEventListener('submit', submitForm);
  }, []);

  return (
    <Layouts pageTitle=" | Contact">
      <section className="relative flex w-full flex-col items-center justify-evenly pt-32 pb-24 md:h-screen md:flex-row md:overflow-hidden md:pt-40 md:pb-28">
        {/* <motion.span {...FadeAnimation} className="title-page">
          CONTACT
        </motion.span> */}

        <motion.div {...ContentAnimation} className="relative my-8 w-9/12 text-right md:my-0 md:w-2/5 z-10">
          <Card className="p-4 bg-indigo-100 border-2 border-indigo-700">
            <CardContent>
              {Contacts.map((contact) => (
                <a href={contact.href} target="_blank" rel="noreferrer" key={contact.id} className="my-4 flex justify-end fill-indigo-800 transition-all duration-500 hover:fill-purple-600 hover:text-purple-600">
                  <div className="mr-2 md:mr-8">
                    <h4 className="text-sm md:text-base font-bold text-indigo-900">{contact.name}</h4>
                    <h3 className="text-xs md:text-sm text-indigo-700">{contact.value}</h3>
                  </div>
                  <div className="min-h-[48px] min-w-[48px] h-12 w-12 border-2 border-indigo-700 bg-white hover:shadow-[4px_4px_0px_0px_rgba(79,70,229,0.4)] hover:translate-y-[-2px] hover:border-indigo-800 transition-all duration-300 flex-shrink-0">
                    <svg className="p-1 w-full h-full" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={contact.svg} />
                    </svg>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div {...ContentAnimation} className="relative my-8 w-9/12 md:my-0 md:w-1/4 z-10">
          <Card className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rotate-2 border-2 border-purple-700">
            <CardContent>
              <form name="contact-form">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  className="mb-2 text-sm border-2 border-purple-500 rounded-none shadow-[2px_2px_0px_0px_rgba(168,85,247,0.2)] focus:border-indigo-500 focus:shadow-[3px_3px_0px_0px_rgba(99,102,241,0.3)]"
                  placeholder="Name"
                  aria-label="Name"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  className="mb-2 text-sm border-2 border-purple-500 rounded-none shadow-[2px_2px_0px_0px_rgba(168,85,247,0.2)] focus:border-indigo-500 focus:shadow-[3px_3px_0px_0px_rgba(99,102,241,0.3)]"
                  placeholder="Email"
                  aria-label="Email"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  className="bg-white border-2 border-purple-500 shadow-[2px_2px_0px_0px_rgba(168,85,247,0.2)] rounded-none px-3 py-2 focus:outline-none focus:shadow-[3px_3px_0px_0px_rgba(99,102,241,0.3)] focus:border-indigo-500 w-full mb-3 h-32 text-sm"
                  placeholder="Write your message..."
                  aria-label="Write your message"
                  required
                />
                <Button
                  type="submit"
                  variant="default"
                  size="sm"
                  disabled={isLoading}
                  className="bg-pink-500 hover:bg-pink-600 text-white transition-colors neo-button"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <motion.div className={`absolute left-0 -top-12 flex w-full justify-center border-2 border-indigo-700 bg-indigo-200 py-1 shadow-[3px_3px_0px_0px_rgba(79,70,229,0.25)] transition-all duration-500 md:-left-[80%] ${!openModal ? 'opacity-0' : ''} z-20 neo-card`}>
            <p className="font-bold text-indigo-900">{messageAlert ? 'Message Sent!' : 'Sorry, Message Not Sent!'}</p>
            <button
              type="button"
              className="absolute right-0 top-0 py-[3px] px-4 font-bold transition-all duration-500 hover:text-purple-600"
              onClick={() => setOpenModal(false)}
              aria-label="Close modal"
            >
              x
            </button>
          </motion.div>
        </motion.div>
      </section>
    </Layouts>
  );
};

export default Contact;
