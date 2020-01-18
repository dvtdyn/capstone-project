import slugify from 'slugify'

export default function Slugify(event, clubName) {
  slugify.extend({ Ä: 'AE', ä: 'ae', Ö: 'OE', ö: 'oe', Ü: 'UE', ü: 'ue' })

  const slugedName = slugify(clubName, {
    replacement: '-',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  })
  return slugedName
}
