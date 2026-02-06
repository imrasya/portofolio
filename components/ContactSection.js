import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Contacts } from '@/data/Contacts';
import { ContentAnimation } from '@/components/Animations';
import { CornerBracket } from '@/components/ui/CornerBracket';

const ContactSection = () => {
    const [openModal, setOpenModal] = useState(false);
    const [messageAlert, setMessageAlert] = useState(false);

    useEffect(() => {
        const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;
        const form = document.forms['contact-form'];

        const submitForm = (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(() => {
                    form.reset();
                    setOpenModal(true);
                    setMessageAlert(true);
                })
                .catch(() => {
                    setOpenModal(true);
                    setMessageAlert(false);
                });
        };

        if (form) {
            form.addEventListener('submit', submitForm);
            return () => form.removeEventListener('submit', submitForm);
        }
    }, []);

    return (
        <section id="contact" className="py-20 md:py-32 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Contact Info */}
                <motion.div {...ContentAnimation} className="order-2 md:order-1">
                    <div className="neo-card bg-card p-6 md:p-8 rotate-1 hover:rotate-0 transition-transform duration-300 rounded-lg relative">
                        <CornerBracket position="top-left" />
                        <div className="bg-primary-dark text-white p-4 -mx-6 md:-mx-8 -mt-6 md:-mt-8 mb-6 rounded-t-lg flex justify-between items-center">
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider">Get In Touch</h2>
                            <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                            {Contacts.map((contact, index) => {
                                const colorStyles = [
                                    { bg: 'bg-primary', pattern: 'pattern-stripes' },
                                    { bg: 'bg-secondary', pattern: 'pattern-dots' },
                                    { bg: 'bg-primary-dark', pattern: 'pattern-checkerboard' },
                                    { bg: 'bg-slate-700', pattern: 'pattern-stripes' },
                                    { bg: 'bg-black', pattern: 'pattern-dots' },
                                ];
                                const style = colorStyles[index % colorStyles.length];
                                const isWide = index === 0;

                                return (
                                    <a href={contact.href} target="_blank" rel="noreferrer" key={`${contact.id}-${index}`} className={`group ${isWide ? 'col-span-2' : 'col-span-1'}`}>
                                        <div className={`${style.bg} ${style.pattern} p-4 shadow-neo group-hover:-translate-y-1 group-hover:shadow-neo-hover transition-all duration-300 h-full flex items-center gap-3 rounded-md border border-white/10`}>
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-foreground rounded-full flex-shrink-0 flex items-center justify-center">
                                                <svg className="w-5 h-5 md:w-6 md:h-6 fill-primary-dark" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d={contact.svg} /></svg>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h4 className="text-sm md:text-base font-black text-white uppercase">{contact.name}</h4>
                                                <p className="text-xs md:text-sm font-medium text-white/80 truncate font-mono">{contact.value}</p>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div {...ContentAnimation} className="order-1 md:order-2">
                    <div className="neo-card bg-card -rotate-1 hover:rotate-0 transition-transform duration-300 relative rounded-lg">
                        <CornerBracket position="bottom-right" />
                        <div className="bg-secondary text-white p-4 rounded-t-lg">
                            <h2 className="text-2xl md:text-3xl font-black uppercase text-center tracking-wider">Send Message</h2>
                        </div>
                        <div className="p-5 md:p-6">
                            <form name="contact-form" className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-foreground uppercase mb-2 font-mono">Your Name</label>
                                    <input type="text" name="name" id="name" className="w-full bg-card text-foreground p-3 font-medium outline-none transition-all focus:shadow-neo focus:border-primary placeholder:text-muted-foreground border border-primary-dark/20 rounded-md font-mono" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-foreground uppercase mb-2 font-mono">Your Email</label>
                                    <input type="email" name="email" id="email" className="w-full bg-card text-foreground p-3 font-medium outline-none transition-all focus:shadow-neo focus:border-primary placeholder:text-muted-foreground border border-primary-dark/20 rounded-md font-mono" placeholder="john@example.com" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-foreground uppercase mb-2 font-mono">Message</label>
                                    <textarea name="message" id="message" rows="5" className="w-full bg-card text-foreground p-3 font-medium outline-none transition-all focus:shadow-neo focus:border-primary placeholder:text-muted-foreground resize-none border border-primary-dark/20 rounded-md font-mono" placeholder="Write your message here..." required />
                                </div>
                                <button type="submit" className="w-full neo-brutal-button bg-primary text-white hover:bg-primary-dark rounded-md">Send Message →</button>
                            </form>
                        </div>
                        {openModal && (
                            <div className="absolute -top-16 left-0 right-0 mx-4">
                                <div className={`neo-card ${messageAlert ? 'bg-primary' : 'bg-secondary'} text-white p-3 flex items-center justify-between rounded-md`}>
                                    <p className="font-bold text-sm">{messageAlert ? '✓ Message Sent Successfully!' : '✕ Sorry, Message Not Sent!'}</p>
                                    <button className="w-6 h-6 bg-foreground text-primary-dark font-bold text-sm border border-primary-dark hover:bg-gray-100 transition-colors rounded-full" onClick={() => setOpenModal(false)}>×</button>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
