export const state = () => ({
  powerHeaders: [
    { label: 'Type/Level', key: 'level', cols: 4, sm: 3, md: 2 },
    { label: 'Name', key: 'name', cols: 8, sm: 9, md: 4, lg: 2 },
    { label: 'Duration', key: 'duration', cols: 3, lg: 2, classes: 'd-none d-md-flex', sortable: false },
    { label: 'Range (Area)', key: 'range', cols: 3, lg: 2, classes: 'd-none d-md-flex', sortable: false },
    { label: 'Attack', key: 'attack', cols: 2, classes: 'd-none d-lg-flex', sortable: false },
    { label: 'Damage/Effect', key: 'effect', cols: 2, classes: 'd-none d-lg-flex', sortable: false }
  ],
  primeTypeText: {
    light: {
      force: 'purple--text text--darken-1',
      necrotic: 'blue-grey--text text--darken-2',
      fire: 'deep-orange--text text--accent-4',
      cold: 'cyan--text text--darken-3',
      lightning: 'blue--text text--darken-3',
      detonates: 'secondary--text'
    },
    dark: {
      force: 'purple--text text--lighten-2',
      necrotic: 'blue-grey--text text--lighten-2',
      fire: 'deep-orange--text',
      cold: 'cyan--text text--darken-1',
      lightning: 'blue--text text--lighten-1',
      detonates: 'red--text text--lighten-1'
    }
  }
})

export const getters = {
  powerHeaders: state => state.powerHeaders,
  primeTypeText: state => state.primeTypeText
}
