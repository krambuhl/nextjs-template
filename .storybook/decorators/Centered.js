const styles = {
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%'
}

export default storyFn => <div style={styles}>{storyFn()}</div>
