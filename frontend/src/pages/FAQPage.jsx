import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
    return (
        <div>
            <Header activeHeading={5} />
            <Faq />
            <Footer />
        </div>
    );
};

const Faq = () => {
    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (tab) => {
        if (activeTab === tab) {
            setActiveTab(0);
        } else {
            setActiveTab(tab);
        }
    };

    return (
        <div className={`${styles.section} my-8`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQ</h2>
            <div className="mx-auto space-y-4">
                {/* single Faq */}

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(2)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            What if I am not satisfied with the service?
                        </span>
                        {activeTab === 2 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 2 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                If you're not satisfied with the work done by service providers, we allow you
                                to change the service provider within 7 days of order placed. To initiate the process, please email
                                us at support@plot2plan.com with your order number and a
                                brief explanation of why you're not satisfied with the service.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(3)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            How do I track my progress?
                        </span>
                        {activeTab === 3 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 3 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                You can track your work progress by clicking the tracking link in your
                                assignment confirmation email, or by logging into your account on
                                our website and viewing the order details.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(4)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            How do I contact customer support?
                        </span>
                        {activeTab === 4 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 4 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                You can contact our customer support team by emailing us at
                                support@plot2plan.com, or by calling us at (555) 123-4567
                                between the hours of 9am and 5pm EST, Monday through Friday.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(5)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            Can I change start date of project or cancel my project?
                        </span>
                        {activeTab === 5 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 5 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                Unfortunately, once an project has been started, we are not able to
                                make changes or cancellations. If you no longer want to project to
                                continue, you have to pay the full amount to the sellers.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(6)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            Do you offer international services?
                        </span>
                        {activeTab === 6 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 6 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                Currently, we only offer services within the India.
                            </p>
                        </div>
                    )}
                </div>

                <div className="border-b border-gray-200 pb-4">
                    <button
                        className="flex items-center justify-between w-full"
                        onClick={() => toggleTab(7)}
                    >
                        <span className="text-lg font-medium text-gray-900">
                            What payment methods do you accept?
                        </span>
                        {activeTab === 7 ? (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        )}
                    </button>
                    {activeTab === 7 && (
                        <div className="mt-4">
                            <p className="text-base text-gray-500">
                                We accept visa,mastercard,paypal payment method also we have
                                weekly paying system.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;