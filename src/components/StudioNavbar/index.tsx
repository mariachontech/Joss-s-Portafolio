import Link from 'next/link'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

type Props = {
  renderDefault: any
}

const StudioNavBar = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-mariachon-orange flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-mariachon-orange mr-2" />
          Inicio
        </Link>
      </div>
      {props?.renderDefault(props)}
    </div>
  )
}

export default StudioNavBar
