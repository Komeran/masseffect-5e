---
id: annihilation_field
name: Annihilation Field
level: '4'
type: biotic
attackType:
- CON Save
effect:
- damage
damageType:
- necrotic
castingTime: Action
duration: 1 minute
concentration: true
distance:
  range: Self
  aoeType: sphere
  aoeDistance: 6m
detonates: 
primes: necrotic
availableClasses:
- adept
- vanguard
advancementOptions:
- name: Anti-Armor
  description: Each creature within the sphere has a -1 penalty to their AC.
- name: Phasic
  description: Annihilation Field's damage bypasses shields.
---
Spin a field of dark energy originating from you in a 6m sphere. The field moves with you and reduces your movement speed by half.
Each creature within the sphere must make a Constitution saving throw. A creature takes 12d6 necrotic damage on a failed save or half as much damage on a successful one. A creature must also make the saving throw when it enters the field's space for the first time on a turn or ends its turn there.
Any creature within the sphere is {primed-necrotic}. This condition ends immediately if the creature leaves the sphere.
At higher levels: When you cast this spell using a spell slot of 5th level or higher, increase the radius by 4m for each slot level above the 4th.