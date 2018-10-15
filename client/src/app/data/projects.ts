import { Project } from '../projects/models/project.model';

export const Projects: Project[] = [
    {
      id: 0,
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec turpis sagittis, aliquet sem eu, consequat dui. Ut eu diam et nisi commodo dapibus. Ut condimentum leo sed dolor suscipit eleifend. Pellentesque pulvinar varius tortor eu malesuada. Integer urna mi, rhoncus ut dolor nec, laoreet tempor ipsum. Cras placerat ante felis, sit amet sagittis sapien blandit at. Nunc lobortis dignissim lorem id porta. Duis tempus felis ac mi consectetur tempus.',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      link: 'www.github.com',
      name: 'Portfolio Web',
      published: new Date('2018-09-18')
    },
    {
      id: 1,
      // tslint:disable-next-line:max-line-length
      description: 'Et nisi commodo dapibus. Ut condimentum leo sed dolor suscipit eleifend. Pellentesque pulvinar varius tortor eu malesuada. Integer urna mi, rhoncus ut dolor nec, laoreet tempor ipsum. Cras placerat ante felis, sit amet sagittis sapien blandit at. Nunc lobortis dignissim lorem id porta. Duis tempus felis ac mi consectetur tempus.',
      image: 'https://assets.pernod-ricard.com/uk/media_images/test.jpg',
      link: 'http://www.google.com',
      name: 'I\'m not sure?',
      published: new Date('2018-08-23')
    }
  ];
