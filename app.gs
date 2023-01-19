class VideoStatistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: '',
      views: '',
      likes: '',
      comments: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const videoUrl = event.target.elements.videoUrl.value;
    const videoId = videoUrl.split('v=')[1];
    this.setState({ videoId });

    // Make a request to the YouTube Data API
    const apiKey = 'YOUR_API_KEY';
    const url = https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${apiKey};

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const stats = data.items[0].statistics;
        this.setState({
          views: stats.viewCount,
          likes: stats.likeCount,
          comments: stats.commentCount
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Video URL:
            <input type="text" name="videoUrl" placeholder="Enter YouTube video URL" />
          </label>
          <button type="submit">Get Statistics</button>
        </form>
        <div id="video-stats">
          <div className="stat">
            <span class
