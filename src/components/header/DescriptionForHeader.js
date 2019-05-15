import React from 'react'
import TypeIt from 'typeit'

class DescriptionForHeader extends React.Component {
  constructor() {
    super()
    this.textTyped = React.createRef()
  }

  componentDidMount() {
    const {
      textTyped: {current},
    } = this
    new TypeIt(current, {
      strings:
        'I am a front-end web developer with React living in London. Check out bellow my skills and the latest projects.',
      speed: 50,
      startDelay: 1500,
      waitUntilVisible: true,
    }).go()
  }

  render() {
    const {textTyped, props} = this
    const {children} = props
    return (
      <p ref={textTyped} className="is-size-6 has-text-light">
        {children}
      </p>
    )
  }
}

export default DescriptionForHeader
