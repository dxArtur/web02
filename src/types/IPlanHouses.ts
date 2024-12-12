interface IPlanHouse {
    title: string;
    badge: string;
    type: string;
    features: { name: string; icon: string }[];
    price: string;
    link: string;
    services: {
      apps: { name: string; logo: string }[];
      streaming: { name: string; logo: string } | null;
    };
  }
  