export default function Loader(props) {
  return (
    <div className="min-vh-100 overflow-hidden" {...props}>
      <div className="min-vh-100 d-flex justify-content-center align-items-center flex-column">
        <span className="text-light bounce">Loading</span>
        <span class="loader2">
          <span class="loader"></span>
        </span>
      </div>
    </div>
  );
}
