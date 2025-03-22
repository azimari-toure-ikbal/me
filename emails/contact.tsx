import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactFormEmail = (props: ContactFormEmailProps) => {
  const { name, email, subject, message } = props;

  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto my-[40px] p-[20px] max-w-[600px] bg-white rounded-[8px]">
            <Heading className="text-[24px] font-bold text-gray-800 mb-[16px]">
              New Contact Form Submission
            </Heading>
            <Text className="text-[16px] text-gray-700 mb-[24px]">
              You have received a new message from your portfolio website
              contact form.
            </Text>

            <Section className="bg-gray-50 p-[16px] rounded-[8px] mb-[24px]">
              <Text className="text-[16px] font-bold text-gray-800 mb-[8px]">
                Sender Information:
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="text-[14px] text-gray-700 mb-[8px]">
                <strong>Subject:</strong> {subject}
              </Text>
            </Section>

            <Section className="mb-[24px]">
              <Text className="text-[16px] font-bold text-gray-800 mb-[8px]">
                Message:
              </Text>
              <Text className="text-[14px] text-gray-700 whitespace-pre-wrap">
                {message}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[24px]" />

            <Text className="text-[12px] text-gray-500 m-0">
              This is an automated email sent from your portfolio website
              contact form.
            </Text>
            <Text className="text-[12px] text-gray-500 m-0">
              © {new Date().getFullYear()} Your Portfolio. All rights reserved.
            </Text>
            <Text className="text-[12px] text-gray-500 m-0">
              123 Portfolio St, Dakar, Senegal
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

ContactFormEmail.PreviewProps = {
  name: "John Doe",
  email: "johndoe@example.com",
  subject: "Project Inquiry",
  message:
    "Hello,\n\nI'm interested in discussing a potential project. Could we schedule a call to talk about it?\n\nBest regards,\nJohn",
};

export default ContactFormEmail;
