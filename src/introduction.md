<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/jessemutz.png',
    name: 'Jesse Mutzebaugh',
    title: 'Founder',
    org: 'New Vista Digital',
    orgLink: 'https://newvistadigital.com/',
    desc: 'Reach Jesse at <a href="tel:7196391470">719-639-1470',
    links: [
      { icon: 'github', link: 'https://github.com/jessemutz' },
      { icon: 'instagram', link: 'https://instagram.com/jessemutz' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/jessemutz' },
      { icon: 'twitter', link: 'https://twitter.com/jessemutz' }
    ]
  }
]
</script>

# What is this site for?
For whatever reason I started writing down tips that I wish I had as I learn them. We don't plan on having any more, but I'm sure there are plenty of other folks that will have kids that may like tips.

> We're not raising children. We're raising future adults.

Beyond the practical, I want to gather resources and tricks from parents I respect who have successfully raised amazing young adults.

## YMMV
*(your mileage may vary)*

Every child is unique. What works for one may not work at all for anyone else.,

> Every player needs a pat on the back. Some just need it a little lower and a little harder.
>
> *-John Wooden*

Kids are motivated differently. Respond to criticism and correction differently. Our job is to understand that and parent each individual as best we can.

## Me, Jesse
<VPTeamMembers size="medium" :members="members" />