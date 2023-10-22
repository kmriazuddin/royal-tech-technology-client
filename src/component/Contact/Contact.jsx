/* eslint-disable react/no-unknown-property */
import { CiLocationOn } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { SiWeightsandbiases } from "react-icons/si";

const Contact = () => {
    return (
        <div className="bg-slate-300 py-1">
            <div className="lg:w-[500px] mx-auto text-center">
                <h1 className="text-4xl text-center my-10 text-teal-500 underline decoration-wavy underline-offset-4"><span className="text-black font-bold">Contact Us</span></h1>
                <p className="text-justify mx-auto text-lg px-5">Prospective attendees will undoubtedly have questions about any event you plan. To save you time and effort, create a Frequently Asked Questions section or web page to address any pressing concerns or potential confusion about event details.</p>
            </div>
            <div className="max-w-6xl mx-auto my-10 py-5 px-5">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center text-center">
                    <div className="rounded-2xl bg-white py-3 px-20 lg:px-0">
                        <CiLocationOn className="text-4xl text-teal-400 text-center m-auto"></CiLocationOn>
                        <h1 className="text-lg py-2">Postal Address</h1>
                        <p>Unica Event Agency</p>
                        <p className="py-1">85 Fentiman Ave</p>
                        <p>Ottawa, ON K1S 0T7</p>
                    </div>
                    <div className="rounded-2xl bg-white py-3">
                        <BsClockHistory className="text-4xl text-teal-400 text-center m-auto"></BsClockHistory>
                        <h1 className="text-lg py-2">Phone & E-mail</h1>
                        <p>Phone: 1-800-64-38</p>
                        <p className="py-1">Fax: 1-800-64-39</p>
                        <p>office@fable.com</p>
                    </div>
                    <div className="rounded-2xl bg-white py-3">
                        <FiPhoneCall className="text-4xl text-teal-400 text-center m-auto"></FiPhoneCall>
                        <h1 className="text-lg py-2">Open Hours</h1>
                        <p>Monday – Friday</p>
                        <p className="py-1">8.00 am – 5.00 pm</p>
                        <p>Weekend Closed</p>
                    </div>
                    <div className="rounded-2xl bg-white py-3">
                        <SiWeightsandbiases className="text-4xl text-teal-400 text-center m-auto"></SiWeightsandbiases>
                        <h1 className="text-lg py-2">Sessions</h1>
                        <p>Mornings, 8 am – 12 noon</p>
                        <p className="py-1">Afternoons, 1 pm – 5 pm</p>
                        <p>Full Day, 8 am – 5 pm</p>
                    </div>
                </div>
                <div className="py-2 md:px-5">
                    <iframe className="w-full h-72 rounded" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.59915521094!2d90.3654215!3d23.750952700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696839948345!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;