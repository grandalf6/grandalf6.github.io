import React from 'react'
import TypeIt from 'typeit'

class SelfDescription extends React.Component {
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
        'I am front end web developer with React living in London. My adventure with web development I started about 2 years ago as a hobby and most of skills I gained through project-based learning and by just being curious. Recently I gained some certificates to structure my knowledge and confirm competence and enhance myself on the market.',
      speed: 15,
      startDelay: 100,
      waitUntilVisible: true,
    }).go()
  }

  render() {
    const {textTyped, props} = this
    const {children} = props
    return (
      <p ref={textTyped} className="is-size-6">
        {children}
      </p>
    )
  }
}

export default SelfDescription
