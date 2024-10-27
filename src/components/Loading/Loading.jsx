import imgLoading from '../../assets/images/preloader-8d5a7d18.gif';
import './loading.css';

function Loading() {
  return (
    <>
      <div className="loading">
        <img
          className="w-100"
          src={imgLoading}
          alt="Loading gift animations."
        />
      </div>
    </>
  );
}

export default Loading;
