import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: "Can I get abs just by downloading the app?",
      answer: "Only if you flex hard while tapping the download button. Otherwise, you’ll still need to do some actual crunches."
    },
    {
      question: "Is Neofit medically approved?",
      answer: "Once we had a doctor say “This looks neat.” We’re taking that as a yes."
    },
    {
      question: "If I log a salad but eat pizza, does it know?",
      answer: "Not unless your conscience syncs with Bluetooth. So… you’re safe. For now."
    }
  ],
  [
    {
      question: "Do I need to be a fitness expert to use this app?",
      answer: "Nope! If you can tap a button and drink water, you’re overqualified."
    },
    {
      question: "Can I use it to track my cat’s macros?",
      answer: "Only if your cat can bench press. Otherwise, maybe not the target audience."
    },
    {
      question: "Can Neofit cook my meals too?",
      answer: "Only if your phone also has hands, a stove, and basic culinary ambition."
    }
  ],
  [
    {
      question: "Does it work offline?",
      answer: "Yes! Log your workouts and meals on a desert island. Syncs back when you find Wi-Fi (or civilization)."
    },
    {
      question: "Is my data safe?",
      answer: "Locked up tighter than your gym crush’s social profile. We take privacy and encryption seriously."
    },
    {
      question: "Can Neofit stop me from drunk ordering tacos at 2am?",
      answer: "We could add a feature that slaps your phone out of your hand, but the lawyers said no."
    }
  ]
];


export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
              id="faqs-title"
              className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
          {/*<p className="mt-2 text-lg text-gray-600">*/}
          {/*  If you can’t find what you’re looking for, email our non-existent support team and if you’re lucky someone*/}
          {/*  will get back*/}
          {/*  to you.*/}
          {/*</p>*/}
        </div>
        <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
              <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
