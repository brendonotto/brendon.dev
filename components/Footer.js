
const ExternalLink = ({ href, children }) => (
    <a
      className="hover:text-gray-400 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
);

export default function Footer ({href, children}) {
    return (
        <footer className="w-full h-full border-t border-solid flex justify-center items-center">
            <div className="flex flex-row space-x-4 mt-4">
                <ExternalLink href="https://twitter.com/brendondotto">Twitter</ExternalLink>
                <ExternalLink href="https://github.com/brendonotto">GitHub</ExternalLink>
                <ExternalLink href="https://www.instagram.com/bdotto/">Instagram</ExternalLink>
            </div>
        </footer>
    )
}