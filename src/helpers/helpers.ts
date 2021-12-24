// type FollowUnfollowSuccessType 

export const FollowUnfollowSuccess = (items: Array<any>, objParam: string | number, objProp: any, newValue: any) => {
  return items.map(u => {
    if (u[objParam] === objProp) {
      return { ...u, ...newValue }
    }
    return u
  })
}