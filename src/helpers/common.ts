import { IconType } from 'react-icons/lib'

export const getTwitterHandleFromLink = (link: string) => {
  return link.split('/')
}

export const doesTwitterHandleExist = (
  socialHandlesArray: {
    icon: IconType
    link: string
  }[]
) => {
  return socialHandlesArray.some((socialHandle) =>
    socialHandle.link.includes('twitter')
  )
}
