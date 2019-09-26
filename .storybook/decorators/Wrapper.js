const styles = {
  width: '100%',
  margin: 'auto'
}

export default storyFn => <div style={styles}>{storyFn()}</div>

export const Wrapper1280 = storyFn => <div style={{ maxWidth: 1280, ...styles }}>{storyFn()}</div>
export const Wrapper960 = storyFn => <div style={{ maxWidth: 1080, ...styles }}>{storyFn()}</div>
export const Wrapper720 = storyFn => <div style={{ maxWidth: 640, ...styles }}>{storyFn()}</div>
export const Wrapper480 = storyFn => <div style={{ maxWidth: 480, ...styles }}>{storyFn()}</div>
export const Wrapper320 = storyFn => <div style={{ maxWidth: 320, ...styles }}>{storyFn()}</div>

