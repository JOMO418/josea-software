'use client';

import { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

const faqCategories = [
  {
    name: 'Getting Started & Costs',
    questions: [
      {
        q: 'How do I know which package is right for my business?',
        a: 'We design for scale. <strong>Retail Lite</strong> is perfect for single branch startups. <strong>Retail Pro</strong> suits growing SMEs needing multi-branch support, AI insights, and M-Pesa integration. <strong>Enterprise OS</strong> is tailored for high-volume operations requiring custom workflows, unlimited users, and dedicated support.',
      },
      {
        q: 'Does Josea require me to buy expensive, specialized hardware?',
        a: 'No. Josea is flexible and runs on standard modern laptops, Android tablets, and existing Windows POS machines. We do not force proprietary hardware. However, for convenience, we can supply tested, highly recommended hardware packages at a competitive additional cost.',
      },
      {
        q: 'Are there hidden mandatory monthly maintenance fees?',
        a: 'Transparency is key. Our core software licenses (Lite & Pro) are one-time purchases. Optional ongoing costs may include cloud hosting fees (if not on-premise) or annual support contracts for priority servicing, which are clearly outlined upfront.',
      },
      {
        q: 'How long does the entire process take, from payment to going live?',
        a: 'Typically 2 to 4 weeks. This timeline depends on the complexity of your data migration and the availability of your team for training. Our 4-step process ensures a structured deployment.',
      },
    ],
  },
  {
    name: 'Features, Integrations & AI',
    questions: [
      {
        q: 'How does the M-Pesa integration actually help with my daily reconciliation?',
        a: 'It automates the process. When a customer pays via M-Pesa, the transaction hits your Josea system instantly and automatically maps to the sales order. This eliminates manual cross-checking of SMS messages against receipt books and prevents cashier fraud.',
      },
      {
        q: 'Is "Josea AI" just a buzzword, or does it practically help my daily operations?',
        a: 'It is a practical operational tool. Instead of guessing, Josea AI analyzes your history to predict stock-outs before they happen, identify slow-moving items tying up cash, and suggest optimal reorder points. It turns data into actionable decisions.',
      },
      {
        q: "Can I monitor my business performance remotely from my phone while I'm away?",
        a: 'Yes. The Josea dashboard is cloud-enabled and fully mobile-responsive. As an owner with admin rights, you can view real-time sales, stock levels, and cash flow reports securely from any smartphone or tablet, anywhere in the world.',
      },
      {
        q: 'Does Josea replace my current accounting software (like QuickBooks) or work with it?',
        a: 'Josea handles all operational finance—purchasing, sales, and inventory. For many SMEs, this is enough. For Enterprise clients requiring advanced accounting, we offer API access to integrate data with specialized ERPs.',
      },
    ],
  },
  {
    name: 'Support, Training & Security',
    questions: [
      {
        q: "My staff isn't very tech-savvy. How difficult is the training process?",
        a: 'We build for simplicity. The frontend POS register is intuitive. During deployment, our elite team provides hands-on, role-based training for cashier staff and managers until they are fully confident in using the system daily.',
      },
      {
        q: 'What happens if the internet goes down? Can we still sell?',
        a: 'Yes. We understand the local reality. The core point-of-sale functions are designed to work offline, allowing you to continue serving customers. Transaction data syncs automatically once connectivity is restored.',
      },
      {
        q: 'How secure is my business data, and where is it stored?',
        a: 'Your data security is paramount. We utilize bank-grade encryption for data in transit and at rest. Data is stored either on secure cloud servers with regular backups or on-premise servers depending on your chosen package.',
      },
    ],
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="bg-slate-50 pt-8 sm:pt-12 pb-8 sm:pb-12">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Answers to common questions about pricing, hardware, and operations.
          </p>
        </div>

        {/* Content Container */}
        <div className="mx-auto mt-8 flex max-w-4xl flex-col lg:flex-row lg:gap-8">
          {/* Mobile Category Selector (Dropdown) */}
          <div className="lg:hidden">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(Number(e.target.value))}
              className="block w-full rounded-lg border-gray-300 bg-white py-2 pl-3 pr-8 text-sm shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500"
            >
              {faqCategories.map((category, index) => (
                <option key={category.name} value={index}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Category Sidebar (Tabs) */}
          <div className="hidden lg:block lg:w-52 lg:flex-shrink-0">
            <nav className="flex flex-col space-y-1">
              {faqCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(index)}
                  className={`px-3 py-2 text-left text-sm font-medium transition-colors ${
                    activeCategory === index
                      ? 'border-l-2 border-purple-700 bg-purple-50 text-purple-700'
                      : 'border-l-2 border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Questions Area (Accordions) */}
          <div className="mt-4 flex-1 lg:mt-0">
            <div className="divide-y divide-slate-200">
              {faqCategories[activeCategory].questions.map((faq, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between py-3 text-left">
                        <span
                          className={`text-sm font-medium ${
                            open ? 'text-purple-700' : 'text-slate-900'
                          }`}
                        >
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`ml-3 h-4 w-4 flex-shrink-0 text-slate-500 transition-transform duration-200 ${
                            open ? 'rotate-180 text-purple-700' : ''
                          }`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="pb-3 text-sm text-slate-600 leading-relaxed">
                          <p dangerouslySetInnerHTML={{ __html: faq.a }} />
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
