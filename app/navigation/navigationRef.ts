import { createNavigationContainerRef, ParamListBase } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef<ParamListBase>()

export const navigate = (name: string, params: Record<string, any>) =>
  navigationRef.current?.navigate(name, params)

export const goBack = () => navigationRef.current?.goBack()
