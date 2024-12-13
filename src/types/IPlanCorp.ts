interface IFeature {
  name: string
  icon?: string | null
}

interface IPlanCorp {
    title: string
    badge: string
    type: string
    features: IFeature[]
    link: string
    services: {
      apps: { name: string; logo: string }[]
      streaming: { name: string; logo: string } | null
    };
  }
  