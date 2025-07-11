import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import {GooglePlayLink} from "@/components/GooglePlayLink";

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#9e86ff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Start your fitness journey today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            It takes less than a minute to get started. Download the app, set your goals, and start tracking your meals and workouts — your progress begins now.
          </p>
          <div className="mt-8 flex justify-center gap-x-6">
            <AppStoreLink color="white" />
            <GooglePlayLink color="white"/>
          </div>
        </div>
      </Container>
    </section>
  )
}
