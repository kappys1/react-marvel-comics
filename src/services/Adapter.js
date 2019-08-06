class Adapter {
  static comicAdapter(data) {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      thumbnail: `${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`,
      prices: data.prices.filter(v => v.type === 'printPrice')[0],
      dates: data.dates.filter(v => v.type === 'onsaleDate')[0],
      creators: data.creators.items.map(creator => {
        return {
          name: creator.name,
          role: creator.role
        };
      })
    };
  }
}

export default Adapter;
