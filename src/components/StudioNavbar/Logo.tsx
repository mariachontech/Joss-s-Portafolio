import Image from 'next/image'

type Props = {
	renderDefault?: any
  title?: string
}

const Logo = (props: Props) => {
  const { renderDefault, title } = props
  return (
    <div className="flex items-center space-x-2 gap-2">
      <Image
        className="rounded-full object-cover"
        src="/mariachonapp.png"
        height={50}
        width={50}
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo
