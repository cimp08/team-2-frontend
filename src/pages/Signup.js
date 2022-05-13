import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
/* import { register } from "../services/userServices";
import Form from "../components/common/Form"; */

const Signup = () => {
	const handleFormSubmit = (e) => {
		e.preventDefault();

		let email = e.target.elements.email?.value;
		let password = e.target.elements.password?.value;

		console.log(email, password);
	};
	return (
		<>
			<Header />
			<div className="h-screen flex">
				<div className="w-full max-w-md m-auto bg-white rounded-3xl border border-primaryBorder shadow-2xl py-10 px-10">
					<h1 className="text-5xl font-normal mt-4 mb-10">Sign up</h1>

					<form onSubmit={handleFormSubmit}>
						<div>
							<input
								type="email"
								className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
								id="email"
								placeholder="Email Adress"
							/>
						</div>
						<div>
							<input
								type="password"
								className="w-full p-2 text-primary bg-gray-100 shadow-md border rounded-full outline-none text-sm transition duration-150 ease-in-out mb-4"
								id="password"
								placeholder="Password"
							/>
						</div>

						<div className="flex justify-center items-center mt-6">
							<button className="w-full bg-purple-500 shadow-xl hover:bg-purple-700 text-white py-2 px-9 rounded-full">
								Create Account
							</button>
						</div>
					</form>

					<div className="w-full border-t border-gray-400 mt-5">
						<div className="flex justify-center">
							<h2 className="text-md font-normal mt-4">
								Already have an account?
							</h2>
							<h2 className="text-md font-bold ml-2 mt-4">
								<Link to="/login">Log in</Link>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Signup;
