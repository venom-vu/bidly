export const useDemoModal = () => {
  const isOpen = useState<boolean>('demoModalIsOpen', () => false)
  const videoTitle = useState<string>('demoModalTitle', () => 'Trải nghiệm Khám phá Giải pháp Salesforce CRM')

  const openModal = (title?: string) => {
    if (title) videoTitle.value = title
    isOpen.value = true
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
  }

  const closeModal = () => {
    isOpen.value = false
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  }

  return {
    isOpen,
    videoTitle,
    openModal,
    closeModal
  }
}
